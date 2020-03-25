# Files

In IoTDB, there are many kinds of data needed to be storage. In this section, we will introduce IoTDB's data storage strategy in order to give you an intuitive understanding of IoTDB's data management.

The data that IoTDB stores is divided into three categories, namely data files, system files, and pre-write log files.

## Data Files

Data files store all the data that the user wrote to IoTDB, which contains TsFile and other files. TsFile storage directory can be configured with the `data_dirs` configuration item (see [file layer](/document/V0.9.x/UserGuide/3-Server/4-Config%20Manual.html) for details). Other files can be configured through [data_dirs](/document/V0.9.x/UserGuide/3-Server/4-Config%20Manual.html) configuration item (see [Engine Layer](/document/V0.9.x/UserGuide/3-Server/4-Config%20Manual.html) for details).

In order to better support users' storage requirements such as disk space expansion, IoTDB supports multiple file directories storage methods for TsFile storage configuration. Users can set multiple storage paths as data storage locations( see [data_dirs](/document/V0.9.x/UserGuide/3-Server/4-Config%20Manual.html) configuration item), and you can specify or customize the directory selection policy (see [multi_dir_strategy](/document/V0.9.x/UserGuide/3-Server/4-Config%20Manual.html) configuration item for details).

## System files

System files include schema files, which store metadata information of data in IoTDB. It can be configured through the `base_dir` configuration item (see [System Layer](/document/V0.9.x/UserGuide/3-Server/4-Config%20Manual.html) for details).

## Pre-write Log Files

Pre-write log files store WAL files. It can be configured through the `wal_dir` configuration item (see [System Layer](/document/V0.9.x/UserGuide/3-Server/2-Single%20Node%20Setup.html) for details).

## Example of Setting Data storage Directory

For a clearer understanding of configuring the data storage directory, we will give an example in this section.

All data directory paths involved in storage directory setting are: base_dir, data_dirs, multi_dir_strategy, and wal_dir, which refer to system files, data folders, storage strategy, and pre-write log files.

An example of the configuration items are as follows:

```
base_dir = $IOTDB_HOME/data
data_dirs = /data1/data, /data2/data, /data3/data 
multi_dir_strategy=MaxDiskUsableSpaceFirstStrategy
wal_dir= $IOTDB_HOME/data/wal
```
After setting the configuration, the system will:

* Save all system files in $IOTDB_HOME/data
* Save TsFile in /data1/data, /data2/data, /data3/data. And the choosing strategy is `MaxDiskUsableSpaceFirstStrategy`, that is every time data writes to the disk, the system will automatically select a directory with the largest remaining disk space to write data.
* Save WAL data in $IOTDB_HOME/data/wal