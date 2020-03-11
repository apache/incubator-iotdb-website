# Chapter 5: Operation Manual
# DDL (Data Definition Language)

### Create Storage Group
According to the storage model we can set up the corresponding storage group. The SQL statements for creating storage groups are as follows:

```
IoTDB > set storage group to root.ln
IoTDB > set storage group to root.sgcc
```

We can thus create two storage groups using the above two SQL statements.

It is worth noting that when the path itself or the parent/child layer of the path is already set as a storage group, the path is then not allowed to be set as a storage group. For example, it is not feasible to set `root.ln.wf01` as a storage group when there exist two storage groups `root.ln` and `root.sgcc`. The system will give the corresponding error prompt as shown below:

```
IoTDB> set storage group to root.ln.wf01
Msg: org.apache.iotdb.exception.MetadataErrorException: org.apache.iotdb.exception.PathErrorException: The prefix of root.ln.wf01 has been set to the storage group.
```

### Show Storage Group
After the storage group is created, we can use the [SHOW STORAGE GROUP](/#/Documents/progress/chap5/sec4) statement to view all the storage groups. The SQL statement is as follows:

```
IoTDB> show storage group
```

The result is as follows:
<center><img style="width:100%; max-width:800px; max-height:600px; margin-left:auto; margin-right:auto; display:block;" src="https://user-images.githubusercontent.com/13203019/51577338-84c70600-1ef4-11e9-9dab-605b32c02836.jpg"></center>


### Create Timeseries
According to the storage model selected before, we can create corresponding timeseries in the two storage groups respectively. The SQL statements for creating timeseries are as follows:

```
IoTDB > create timeseries root.ln.wf01.wt01.status with datatype=BOOLEAN,encoding=PLAIN
IoTDB > create timeseries root.ln.wf01.wt01.temperature with datatype=FLOAT,encoding=RLE
IoTDB > create timeseries root.ln.wf02.wt02.hardware with datatype=TEXT,encoding=PLAIN
IoTDB > create timeseries root.ln.wf02.wt02.status with datatype=BOOLEAN,encoding=PLAIN
IoTDB > create timeseries root.sgcc.wf03.wt01.status with datatype=BOOLEAN,encoding=PLAIN
IoTDB > create timeseries root.sgcc.wf03.wt01.temperature with datatype=FLOAT,encoding=RLE
```

It is worth noting that when in the CRATE TIMESERIES statement the encoding method conflicts with the data type, the system will give the corresponding error prompt as shown below:

```
IoTDB> create timeseries root.ln.wf02.wt02.status WITH DATATYPE=BOOLEAN, ENCODING=TS_2DIFF
error: encoding TS_2DIFF does not support BOOLEAN
```

Please refer to [Encoding](/#/Documents/progress/chap2/sec3) for correspondence between data type and encoding.

### Show Timeseries

Currently, IoTDB supports two ways of viewing timeseries:

* SHOW TIMESERIES statement presents all timeseries information in JSON form 
* SHOW TIMESERIES <`Path`> statement returns all timeseries information and the total number of timeseries under the given <`Path`>  in tabular form. timeseries information includes: timeseries path, storage group it belongs to, data type, encoding type.  <`Path`> needs to be a prefix path or a path with star or a timeseries path. SQL statements are as follows:

```
IoTDB> show timeseries root
IoTDB> show timeseries root.ln
```

The results are shown below respectly:

<center><img style="width:100%; max-width:800px; max-height:600px; margin-left:auto; margin-right:auto; display:block;" src="https://user-images.githubusercontent.com/13203019/51577347-8db7d780-1ef4-11e9-91d6-764e58c10e94.jpg"></center>
<center><img style="width:100%; max-width:800px; max-height:600px; margin-left:auto; margin-right:auto; display:block;" src="https://user-images.githubusercontent.com/13203019/51577359-97413f80-1ef4-11e9-8c10-53b291fc10a5.jpg"></center>

It is worth noting that when the queried path does not exist, the system will return no timeseries.  

### Count Timeseries
IoTDB is able to use `COUNT TIMESERIES <Path>` to count the number of timeseries in the path. SQL statements are as follows:
```
IoTDB > COUNT TIMESERIES root
IoTDB > COUNT TIMESERIES root.ln
IoTDB > COUNT TIMESERIES root.ln.*.*.status
IoTDB > COUNT TIMESERIES root.ln.wf01.wt01.status
```

Besides, `LEVEL` could be defined to show count the number of timeseries of each node at the given level in current Metadata Tree. This could be used to query the number of sensors under each device. The grammar is: `COUNT TIMESERIES <Path> GROUP BY LEVEL=<INTEGER>`.

For example, if there are several timeseires (use `show timeseries` to show all timeseries):
<center><img style="width:100%; max-width:800px; margin-left:auto; margin-right:auto; display:block;" src="https://user-images.githubusercontent.com/19167280/69792072-cdc8a480-1200-11ea-8cec-321fef618a12.png"></center>

Then the Metadata Tree will be as below:
<center><img style="width:100%; max-width:600px; margin-left:auto; margin-right:auto; display:block;" src="https://user-images.githubusercontent.com/19167280/69792176-1718f400-1201-11ea-861a-1a83c07ca144.jpg"></center>

As can be seen, `root` is considered as `LEVEL=0`. So when you enter statements such as:

```
IoTDB > COUNT TIMESERIES root GROUP BY LEVEL=1
IoTDB > COUNT TIMESERIES root.ln GROUP BY LEVEL=2
IoTDB > COUNT TIMESERIES root.ln.wf01 GROUP BY LEVEL=2
```

You will get following results:

<center><img style="width:100%; max-width:800px; margin-left:auto; margin-right:auto; display:block;" src="https://user-images.githubusercontent.com/19167280/69792071-cb664a80-1200-11ea-8386-02dd12046c4b.png"></center>

> Note: The path of timeseries is just a filter condition, which has no relationship with the definition of level.

### Count Nodes
IoTDB is able to use `COUNT NODES <Path> LEVEL=<INTEGER>` to count the number of nodes at the given level in current Metadata Tree. This could be used to query the number of devices. The usage are as follows:
```
IoTDB > COUNT NODES root LEVEL=2
IoTDB > COUNT NODES root.ln LEVEL=2
IoTDB > COUNT NODES root.ln.wf01 LEVEL=3
```

As for the above mentioned example and Metadata tree, you can get following results:

<center><img style="width:100%; max-width:800px; margin-left:auto; margin-right:auto; display:block;" src="https://user-images.githubusercontent.com/19167280/69792060-c73a2d00-1200-11ea-8ec4-be7145fd6c8c.png"></center>

> Note: The path of timeseries is just a filter condition, which has no relationship with the definition of level.

### Delete Timeseries
To delete the timeseries we created before, we are able to use `DELETE TimeSeries <PrefixPath>` statement.

The usage are as follows:
```
IoTDB> delete timeseries root.ln.wf01.wt01.status
IoTDB> delete timeseries root.ln.wf01.wt01.temperature, root.ln.wf02.wt02.hardware
IoTDB> delete timeseries root.ln.wf02.*
```

### Show Devices
Similar to `Show Timeseries`, IoTDB also supports two ways of viewing devices:

* `SHOW DEVICES` statement presents all devices information, which is equal to `SHOW DEVICES root`.
* `SHOW DEVICES <PrefixPath>` statement specifies the `PrefixPath` and returns the devices information under the given level.
SQL statement is as follows:
```
IoTDB> show devices
IoTDB> show devices root.ln
```

## TTL
IoTDB supports storage-level TTL settings, which means it is able to delete old data automatically and periodically. The benefit of using TTL is that hopefully you can control the total disk space usage and prevent the machine from running out of disks. Moreover, the query performance may downgrade as the total number of files goes up and the memory usage also increase as there are more files. Timely removing such files helps to keep at a high query performance level and reduce memory usage.

### Set TTL
The SQL Statement for setting TTL is as follow:
```
IoTDB> set ttl to root.ln 3600000
```
This example means that for data in `root.ln`, only that of the latest 1 hour will remain, the older one is removed or made invisible.

### Unset TTL

To unset TTL, we can use follwing SQL statement:
```
IoTDB> unset ttl to root.ln
```
After unset TTL, all data will be accepted in `root.ln`

