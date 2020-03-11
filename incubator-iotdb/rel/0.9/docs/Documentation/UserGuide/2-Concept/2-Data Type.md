# Chapter 2: Concept

## Data Type
IoTDB supports six data types in total:
* BOOLEAN (Boolean)
* INT32 (Integer)
* INT64 (Long Integer)
* FLOAT (Single Precision Floating Point)
* DOUBLE (Double Precision Floating Point)
* TEXT (String).


The time series of **FLOAT** and **DOUBLE** type can specify (MAX\_POINT\_NUMBER, see [this page](/#/Documents/progress/chap5/sec4) for more information on how to specify), which is the number of digits after the decimal point of the floating point number, if the encoding method is [RLE](/#/Documents/progress/chap2/sec3) or [TS\_2DIFF](/#/Documents/progress/chap2/sec3) (Refer to [Create Timeseries Statement](/#/Documents/progress/chap5/sec4) for more information on how to specify). If MAX\_POINT\_NUMBER is not specified, the system will use [float\_precision](/#/Documents/progress/chap3/sec4) in the configuration file `tsfile-format.properties`.

* For Float data value, The data range is (-Integer.MAX_VALUE, Integer.MAX_VALUE), rather than Float.MAX_VALUE, and the max_point_number is 19, it is because of the limition of function Math.round(float) in Java.
* For Double data value, The data range is (-Long.MAX_VALUE, Long.MAX_VALUE), rather than Double.MAX_VALUE, and the max_point_number is 19, it is because of the limition of function Math.round(double) in Java (Long.MAX_VALUE=9.22E18).

When the data type of data input by the user in the system does not correspond to the data type of the time series, the system will report type errors. As shown below, the second-order difference encoding does not support the Boolean type:

```
IoTDB> create timeseries root.ln.wf02.wt02.status WITH DATATYPE=BOOLEAN, ENCODING=TS_2DIFF
error: encoding TS_2DIFF does not support BOOLEAN
```