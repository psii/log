var searchIndex = {};
searchIndex['env_logger'] = {"items":[[3,"LogBuilder","env_logger","LogBuilder acts as builder for initializing the Logger.\nIt can be used to customize the log format, change the enviromental variable used\nto provide the logging directives and also set the default log level filter.",null,null],[5,"init","","Initializes the global logger with an env logger.",null,{"inputs":[],"output":{"name":"result"}}],[11,"new","","Initializes the log builder with defaults",0,{"inputs":[{"name":"logbuilder"}],"output":{"name":"logbuilder"}}],[11,"filter","","Adds filters to the logger",0,{"inputs":[{"name":"logbuilder"},{"name":"option"},{"name":"loglevelfilter"}],"output":{"name":"self"}}],[11,"format","","Sets the format function for formatting the log output.",0,{"inputs":[{"name":"logbuilder"},{"name":"f"}],"output":{"name":"self"}}],[11,"parse","","Parses the directives string in the same form as the RUST_LOG\nenvironment variable.",0,{"inputs":[{"name":"logbuilder"},{"name":"str"}],"output":{"name":"self"}}],[11,"init","","Initializes the global logger with an env logger.",0,{"inputs":[{"name":"logbuilder"}],"output":{"name":"result"}}]],"paths":[[3,"LogBuilder"]]};
searchIndex['log'] = {"items":[[3,"LogRecord","log","The \"payload\" of a log message.",null,null],[3,"LogMetadata","","Metadata about a log message.",null,null],[3,"LogLocation","","The location of a log message.",null,null],[3,"MaxLogLevelFilter","","A token providing read and write access to the global maximum log level\nfilter.",null,null],[3,"SetLoggerError","","The type returned by `set_logger` if `set_logger` has already been called.",null,null],[4,"LogLevel","","An enum representing the available verbosity levels of the logging framework",null,null],[13,"Error","","The \"error\" level.",0,null],[13,"Warn","","The \"warn\" level.",0,null],[13,"Info","","The \"info\" level.",0,null],[13,"Debug","","The \"debug\" level.",0,null],[13,"Trace","","The \"trace\" level.",0,null],[4,"LogLevelFilter","","An enum representing the available verbosity level filters of the logging\nframework.",null,null],[13,"Off","","A level lower than all log levels.",1,null],[13,"Error","","Corresponds to the `Error` log level.",1,null],[13,"Warn","","Corresponds to the `Warn` log level.",1,null],[13,"Info","","Corresponds to the `Info` log level.",1,null],[13,"Debug","","Corresponds to the `Debug` log level.",1,null],[13,"Trace","","Corresponds to the `Trace` log level.",1,null],[5,"max_log_level","","Returns the current maximum log level.",null,{"inputs":[],"output":{"name":"loglevelfilter"}}],[5,"set_logger","","Sets the global logger.",null,{"inputs":[{"name":"m"}],"output":{"name":"result"}}],[5,"log_panics","","Registers a panic handler which logs at the error level.",null,{"inputs":[],"output":null}],[8,"Log","","A trait encapsulating the operations required of a logger",null,null],[10,"enabled","","Determines if a log message with the specified metadata would be\nlogged.",2,{"inputs":[{"name":"log"},{"name":"logmetadata"}],"output":{"name":"bool"}}],[10,"log","","Logs the `LogRecord`.",2,{"inputs":[{"name":"log"},{"name":"logrecord"}],"output":null}],[11,"fmt","","",0,{"inputs":[{"name":"loglevel"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",0,{"inputs":[{"name":"loglevel"}],"output":{"name":"loglevel"}}],[11,"eq","","",0,{"inputs":[{"name":"loglevel"},{"name":"loglevel"}],"output":{"name":"bool"}}],[11,"eq","","",0,{"inputs":[{"name":"loglevel"},{"name":"loglevelfilter"}],"output":{"name":"bool"}}],[11,"partial_cmp","","",0,{"inputs":[{"name":"loglevel"},{"name":"loglevel"}],"output":{"name":"option"}}],[11,"partial_cmp","","",0,{"inputs":[{"name":"loglevel"},{"name":"loglevelfilter"}],"output":{"name":"option"}}],[11,"cmp","","",0,{"inputs":[{"name":"loglevel"},{"name":"loglevel"}],"output":{"name":"ordering"}}],[11,"from_str","","",0,{"inputs":[{"name":"loglevel"},{"name":"str"}],"output":{"name":"result"}}],[11,"fmt","","",0,{"inputs":[{"name":"loglevel"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"max","","Returns the most verbose logging level.",0,{"inputs":[{"name":"loglevel"}],"output":{"name":"loglevel"}}],[11,"to_log_level_filter","","Converts the `LogLevel` to the equivalent `LogLevelFilter`.",0,{"inputs":[{"name":"loglevel"}],"output":{"name":"loglevelfilter"}}],[11,"fmt","","",1,{"inputs":[{"name":"loglevelfilter"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",1,{"inputs":[{"name":"loglevelfilter"}],"output":{"name":"loglevelfilter"}}],[11,"eq","","",1,{"inputs":[{"name":"loglevelfilter"},{"name":"loglevelfilter"}],"output":{"name":"bool"}}],[11,"eq","","",1,{"inputs":[{"name":"loglevelfilter"},{"name":"loglevel"}],"output":{"name":"bool"}}],[11,"partial_cmp","","",1,{"inputs":[{"name":"loglevelfilter"},{"name":"loglevelfilter"}],"output":{"name":"option"}}],[11,"partial_cmp","","",1,{"inputs":[{"name":"loglevelfilter"},{"name":"loglevel"}],"output":{"name":"option"}}],[11,"cmp","","",1,{"inputs":[{"name":"loglevelfilter"},{"name":"loglevelfilter"}],"output":{"name":"ordering"}}],[11,"from_str","","",1,{"inputs":[{"name":"loglevelfilter"},{"name":"str"}],"output":{"name":"result"}}],[11,"fmt","","",1,{"inputs":[{"name":"loglevelfilter"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"max","","Returns the most verbose logging level filter.",1,{"inputs":[{"name":"loglevelfilter"}],"output":{"name":"loglevelfilter"}}],[11,"to_log_level","","Converts `self` to the equivalent `LogLevel`.",1,{"inputs":[{"name":"loglevelfilter"}],"output":{"name":"option"}}],[11,"args","","The message body.",3,{"inputs":[{"name":"logrecord"}],"output":{"name":"arguments"}}],[11,"metadata","","Metadata about the log directive.",3,{"inputs":[{"name":"logrecord"}],"output":{"name":"logmetadata"}}],[11,"location","","The location of the log directive.",3,{"inputs":[{"name":"logrecord"}],"output":{"name":"loglocation"}}],[11,"level","","The verbosity level of the message.",3,{"inputs":[{"name":"logrecord"}],"output":{"name":"loglevel"}}],[11,"target","","The name of the target of the directive.",3,{"inputs":[{"name":"logrecord"}],"output":{"name":"str"}}],[11,"level","","The verbosity level of the message.",4,{"inputs":[{"name":"logmetadata"}],"output":{"name":"loglevel"}}],[11,"target","","The name of the target of the directive.",4,{"inputs":[{"name":"logmetadata"}],"output":{"name":"str"}}],[11,"fmt","","",5,{"inputs":[{"name":"loglocation"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",5,{"inputs":[{"name":"loglocation"}],"output":{"name":"loglocation"}}],[11,"module_path","","The module path of the message.",5,{"inputs":[{"name":"loglocation"}],"output":{"name":"str"}}],[11,"file","","The source file containing the message.",5,{"inputs":[{"name":"loglocation"}],"output":{"name":"str"}}],[11,"line","","The line containing the message.",5,{"inputs":[{"name":"loglocation"}],"output":{"name":"u32"}}],[11,"fmt","","",6,{"inputs":[{"name":"maxloglevelfilter"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"get","","Gets the current maximum log level filter.",6,{"inputs":[{"name":"maxloglevelfilter"}],"output":{"name":"loglevelfilter"}}],[11,"set","","Sets the maximum log level.",6,{"inputs":[{"name":"maxloglevelfilter"},{"name":"loglevelfilter"}],"output":null}],[11,"fmt","","",7,{"inputs":[{"name":"setloggererror"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",7,{"inputs":[{"name":"setloggererror"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"description","","",7,{"inputs":[{"name":"setloggererror"}],"output":{"name":"str"}}],[11,"new","alloc::boxed","Allocates memory on the heap and then moves `x` into it.",8,{"inputs":[{"name":"box"},{"name":"t"}],"output":{"name":"box"}}],[11,"from_raw","","Constructs a box from the raw pointer.",8,null],[11,"into_raw","","Consumes the `Box`, returning the wrapped raw pointer.",8,null],[11,"downcast","","Attempt to downcast the box to a concrete type.",8,{"inputs":[{"name":"box"}],"output":{"name":"result"}}],[11,"downcast","","Attempt to downcast the box to a concrete type.",8,{"inputs":[{"name":"box"}],"output":{"name":"result"}}],[11,"clone","","",9,{"inputs":[{"name":"exchangeheapsingleton"}],"output":{"name":"exchangeheapsingleton"}}],[11,"pointer","","",10,null],[11,"make_place","","",10,{"inputs":[{"name":"intermediatebox"}],"output":{"name":"intermediatebox"}}],[11,"finalize","","",10,{"inputs":[{"name":"intermediatebox"}],"output":{"name":"box"}}],[11,"finalize","","",8,{"inputs":[{"name":"box"},{"name":"intermediatebox"}],"output":{"name":"box"}}],[11,"make_place","","",9,{"inputs":[{"name":"exchangeheapsingleton"}],"output":{"name":"intermediatebox"}}],[11,"drop","","",10,null],[11,"default","","",8,{"inputs":[{"name":"box"}],"output":{"name":"box"}}],[11,"default","","",8,{"inputs":[{"name":"box"}],"output":{"name":"box"}}],[11,"clone","","Returns a new box with a `clone()` of this box's contents.",8,{"inputs":[{"name":"box"}],"output":{"name":"box"}}],[11,"clone_from","","Copies `source`'s contents into `self` without creating a new allocation.",8,null],[11,"clone","","",8,{"inputs":[{"name":"box"}],"output":{"name":"box"}}],[11,"eq","","",8,{"inputs":[{"name":"box"},{"name":"box"}],"output":{"name":"bool"}}],[11,"ne","","",8,{"inputs":[{"name":"box"},{"name":"box"}],"output":{"name":"bool"}}],[11,"partial_cmp","","",8,{"inputs":[{"name":"box"},{"name":"box"}],"output":{"name":"option"}}],[11,"lt","","",8,{"inputs":[{"name":"box"},{"name":"box"}],"output":{"name":"bool"}}],[11,"le","","",8,{"inputs":[{"name":"box"},{"name":"box"}],"output":{"name":"bool"}}],[11,"ge","","",8,{"inputs":[{"name":"box"},{"name":"box"}],"output":{"name":"bool"}}],[11,"gt","","",8,{"inputs":[{"name":"box"},{"name":"box"}],"output":{"name":"bool"}}],[11,"cmp","","",8,{"inputs":[{"name":"box"},{"name":"box"}],"output":{"name":"ordering"}}],[11,"hash","","",8,null],[11,"from","","",8,{"inputs":[{"name":"box"},{"name":"t"}],"output":{"name":"box"}}],[11,"fmt","","",8,{"inputs":[{"name":"box"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",8,{"inputs":[{"name":"box"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",8,{"inputs":[{"name":"box"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"deref","","",8,{"inputs":[{"name":"box"}],"output":{"name":"t"}}],[11,"deref_mut","","",8,{"inputs":[{"name":"box"}],"output":{"name":"t"}}],[11,"next","","",8,{"inputs":[{"name":"box"}],"output":{"name":"option"}}],[11,"size_hint","","",8,null],[11,"next_back","","",8,{"inputs":[{"name":"box"}],"output":{"name":"option"}}],[11,"call_once","","",8,{"inputs":[{"name":"box"},{"name":"a"}],"output":{"name":"r"}}],[11,"call_once","","",8,{"inputs":[{"name":"box"},{"name":"a"}],"output":{"name":"r"}}],[11,"clone","","",8,{"inputs":[{"name":"box"}],"output":{"name":"box"}}],[11,"borrow","","",8,{"inputs":[{"name":"box"}],"output":{"name":"t"}}],[11,"borrow_mut","","",8,{"inputs":[{"name":"box"}],"output":{"name":"t"}}],[11,"as_ref","","",8,{"inputs":[{"name":"box"}],"output":{"name":"t"}}],[11,"as_mut","","",8,{"inputs":[{"name":"box"}],"output":{"name":"t"}}],[11,"fmt","alloc::arc","",11,{"inputs":[{"name":"weak"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"new","","Constructs a new `Arc<T>`.",12,{"inputs":[{"name":"arc"},{"name":"t"}],"output":{"name":"arc"}}],[11,"try_unwrap","","Unwraps the contained value if the `Arc<T>` has only one strong reference.\nThis will succeed even if there are outstanding weak references.",12,{"inputs":[{"name":"arc"},{"name":"arc"}],"output":{"name":"result"}}],[11,"downgrade","","Downgrades the `Arc<T>` to a `Weak<T>` reference.",12,{"inputs":[{"name":"arc"},{"name":"arc"}],"output":{"name":"weak"}}],[11,"weak_count","","Get the number of weak references to this value.",12,{"inputs":[{"name":"arc"},{"name":"arc"}],"output":{"name":"usize"}}],[11,"strong_count","","Get the number of strong references to this value.",12,{"inputs":[{"name":"arc"},{"name":"arc"}],"output":{"name":"usize"}}],[11,"clone","","Makes a clone of the `Arc<T>`.",12,{"inputs":[{"name":"arc"}],"output":{"name":"arc"}}],[11,"deref","","",12,{"inputs":[{"name":"arc"}],"output":{"name":"t"}}],[11,"make_mut","","Make a mutable reference into the given `Arc<T>` by cloning the inner\ndata if the `Arc<T>` doesn't have one strong reference and no weak\nreferences.",12,{"inputs":[{"name":"arc"},{"name":"arc"}],"output":{"name":"t"}}],[11,"get_mut","","Returns a mutable reference to the contained value if the `Arc<T>` has\none strong reference and no weak references.",12,{"inputs":[{"name":"arc"},{"name":"arc"}],"output":{"name":"option"}}],[11,"drop","","Drops the `Arc<T>`.",12,null],[11,"upgrade","","Upgrades a weak reference to a strong reference.",11,{"inputs":[{"name":"weak"}],"output":{"name":"option"}}],[11,"clone","","Makes a clone of the `Weak<T>`.",11,{"inputs":[{"name":"weak"}],"output":{"name":"weak"}}],[11,"drop","","Drops the `Weak<T>`.",11,null],[11,"eq","","Equality for two `Arc<T>`s.",12,{"inputs":[{"name":"arc"},{"name":"arc"}],"output":{"name":"bool"}}],[11,"ne","","Inequality for two `Arc<T>`s.",12,{"inputs":[{"name":"arc"},{"name":"arc"}],"output":{"name":"bool"}}],[11,"partial_cmp","","Partial comparison for two `Arc<T>`s.",12,{"inputs":[{"name":"arc"},{"name":"arc"}],"output":{"name":"option"}}],[11,"lt","","Less-than comparison for two `Arc<T>`s.",12,{"inputs":[{"name":"arc"},{"name":"arc"}],"output":{"name":"bool"}}],[11,"le","","'Less-than or equal to' comparison for two `Arc<T>`s.",12,{"inputs":[{"name":"arc"},{"name":"arc"}],"output":{"name":"bool"}}],[11,"gt","","Greater-than comparison for two `Arc<T>`s.",12,{"inputs":[{"name":"arc"},{"name":"arc"}],"output":{"name":"bool"}}],[11,"ge","","'Greater-than or equal to' comparison for two `Arc<T>`s.",12,{"inputs":[{"name":"arc"},{"name":"arc"}],"output":{"name":"bool"}}],[11,"cmp","","",12,{"inputs":[{"name":"arc"},{"name":"arc"}],"output":{"name":"ordering"}}],[11,"fmt","","",12,{"inputs":[{"name":"arc"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",12,{"inputs":[{"name":"arc"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",12,{"inputs":[{"name":"arc"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"default","","",12,{"inputs":[{"name":"arc"}],"output":{"name":"arc"}}],[11,"hash","","",12,null],[11,"from","","",12,{"inputs":[{"name":"arc"},{"name":"t"}],"output":{"name":"arc"}}],[11,"new","","Constructs a new `Weak<T>` without an accompanying instance of T.",11,{"inputs":[{"name":"weak"}],"output":{"name":"weak"}}],[11,"borrow","","",12,{"inputs":[{"name":"arc"}],"output":{"name":"t"}}],[11,"as_ref","","",12,{"inputs":[{"name":"arc"}],"output":{"name":"t"}}],[11,"new","alloc::rc","Constructs a new `Rc<T>`.",13,{"inputs":[{"name":"rc"},{"name":"t"}],"output":{"name":"rc"}}],[11,"try_unwrap","","Unwraps the contained value if the `Rc<T>` has only one strong reference.\nThis will succeed even if there are outstanding weak references.",13,{"inputs":[{"name":"rc"},{"name":"rc"}],"output":{"name":"result"}}],[11,"would_unwrap","","Checks if `Rc::try_unwrap` would return `Ok`.",13,{"inputs":[{"name":"rc"},{"name":"rc"}],"output":{"name":"bool"}}],[11,"downgrade","","Downgrades the `Rc<T>` to a `Weak<T>` reference.",13,{"inputs":[{"name":"rc"},{"name":"rc"}],"output":{"name":"weak"}}],[11,"weak_count","","Get the number of weak references to this value.",13,{"inputs":[{"name":"rc"},{"name":"rc"}],"output":{"name":"usize"}}],[11,"strong_count","","Get the number of strong references to this value.",13,{"inputs":[{"name":"rc"},{"name":"rc"}],"output":{"name":"usize"}}],[11,"is_unique","","Returns true if there are no other `Rc` or `Weak<T>` values that share\nthe same inner value.",13,{"inputs":[{"name":"rc"},{"name":"rc"}],"output":{"name":"bool"}}],[11,"get_mut","","Returns a mutable reference to the contained value if the `Rc<T>` has\none strong reference and no weak references.",13,{"inputs":[{"name":"rc"},{"name":"rc"}],"output":{"name":"option"}}],[11,"make_mut","","Make a mutable reference into the given `Rc<T>` by cloning the inner\ndata if the `Rc<T>` doesn't have one strong reference and no weak\nreferences.",13,{"inputs":[{"name":"rc"},{"name":"rc"}],"output":{"name":"t"}}],[11,"deref","","",13,{"inputs":[{"name":"rc"}],"output":{"name":"t"}}],[11,"drop","","Drops the `Rc<T>`.",13,null],[11,"clone","","Makes a clone of the `Rc<T>`.",13,{"inputs":[{"name":"rc"}],"output":{"name":"rc"}}],[11,"default","","Creates a new `Rc<T>`, with the `Default` value for `T`.",13,{"inputs":[{"name":"rc"}],"output":{"name":"rc"}}],[11,"eq","","Equality for two `Rc<T>`s.",13,{"inputs":[{"name":"rc"},{"name":"rc"}],"output":{"name":"bool"}}],[11,"ne","","Inequality for two `Rc<T>`s.",13,{"inputs":[{"name":"rc"},{"name":"rc"}],"output":{"name":"bool"}}],[11,"partial_cmp","","Partial comparison for two `Rc<T>`s.",13,{"inputs":[{"name":"rc"},{"name":"rc"}],"output":{"name":"option"}}],[11,"lt","","Less-than comparison for two `Rc<T>`s.",13,{"inputs":[{"name":"rc"},{"name":"rc"}],"output":{"name":"bool"}}],[11,"le","","'Less-than or equal to' comparison for two `Rc<T>`s.",13,{"inputs":[{"name":"rc"},{"name":"rc"}],"output":{"name":"bool"}}],[11,"gt","","Greater-than comparison for two `Rc<T>`s.",13,{"inputs":[{"name":"rc"},{"name":"rc"}],"output":{"name":"bool"}}],[11,"ge","","'Greater-than or equal to' comparison for two `Rc<T>`s.",13,{"inputs":[{"name":"rc"},{"name":"rc"}],"output":{"name":"bool"}}],[11,"cmp","","Comparison for two `Rc<T>`s.",13,{"inputs":[{"name":"rc"},{"name":"rc"}],"output":{"name":"ordering"}}],[11,"hash","","",13,null],[11,"fmt","","",13,{"inputs":[{"name":"rc"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",13,{"inputs":[{"name":"rc"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",13,{"inputs":[{"name":"rc"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"from","","",13,{"inputs":[{"name":"rc"},{"name":"t"}],"output":{"name":"rc"}}],[11,"upgrade","","Upgrades a weak reference to a strong reference.",14,{"inputs":[{"name":"weak"}],"output":{"name":"option"}}],[11,"drop","","Drops the `Weak<T>`.",14,null],[11,"clone","","Makes a clone of the `Weak<T>`.",14,{"inputs":[{"name":"weak"}],"output":{"name":"weak"}}],[11,"fmt","","",14,{"inputs":[{"name":"weak"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"new","","Constructs a new `Weak<T>` without an accompanying instance of T.",14,{"inputs":[{"name":"weak"}],"output":{"name":"weak"}}],[11,"borrow","","",13,{"inputs":[{"name":"rc"}],"output":{"name":"t"}}],[11,"as_ref","","",13,{"inputs":[{"name":"rc"}],"output":{"name":"t"}}],[11,"new","alloc::raw_vec","Creates the biggest possible RawVec without allocating. If T has positive\nsize, then this makes a RawVec with capacity 0. If T has 0 size, then it\nit makes a RawVec with capacity `usize::MAX`. Useful for implementing\ndelayed allocation.",15,{"inputs":[{"name":"rawvec"}],"output":{"name":"rawvec"}}],[11,"with_capacity","","Creates a RawVec with exactly the capacity and alignment requirements\nfor a `[T; cap]`. This is equivalent to calling RawVec::new when `cap` is 0\nor T is zero-sized. Note that if `T` is zero-sized this means you will *not*\nget a RawVec with the requested capacity!",15,{"inputs":[{"name":"rawvec"},{"name":"usize"}],"output":{"name":"rawvec"}}],[11,"from_raw_parts","","Reconstitutes a RawVec from a pointer and capacity.",15,null],[11,"from_box","","Converts a `Box<[T]>` into a `RawVec<T>`.",15,{"inputs":[{"name":"rawvec"},{"name":"box"}],"output":{"name":"rawvec"}}],[11,"ptr","","Gets a raw pointer to the start of the allocation. Note that this is\nheap::EMPTY if `cap = 0` or T is zero-sized. In the former case, you must\nbe careful.",15,null],[11,"cap","","Gets the capacity of the allocation.",15,{"inputs":[{"name":"rawvec"}],"output":{"name":"usize"}}],[11,"double","","Doubles the size of the type's backing allocation. This is common enough\nto want to do that it's easiest to just have a dedicated method. Slightly\nmore efficient logic can be provided for this than the general case.",15,null],[11,"reserve_exact","","Ensures that the buffer contains at least enough space to hold\n`used_cap + needed_extra_cap` elements. If it doesn't already,\nwill reallocate the minimum possible amount of memory necessary.\nGenerally this will be exactly the amount of memory necessary,\nbut in principle the allocator is free to give back more than\nwe asked for.",15,null],[11,"reserve","","Ensures that the buffer contains at least enough space to hold\n`used_cap + needed_extra_cap` elements. If it doesn't already have\nenough capacity, will reallocate enough space plus comfortable slack\nspace to get amortized `O(1)` behavior. Will limit this behavior\nif it would needlessly cause itself to panic.",15,null],[11,"shrink_to_fit","","Shrinks the allocation down to the specified amount. If the given amount\nis 0, actually completely deallocates.",15,null],[11,"into_box","","Converts the entire buffer into `Box<[T]>`.",15,{"inputs":[{"name":"rawvec"}],"output":{"name":"box"}}],[11,"unsafe_no_drop_flag_needs_drop","","This is a stupid name in the hopes that someone will find this in the\nnot too distant future and remove it with the rest of\n#[unsafe_no_drop_flag]",15,{"inputs":[{"name":"rawvec"}],"output":{"name":"bool"}}],[11,"drop","","Frees the memory owned by the RawVec *without* trying to Drop its contents.",15,null],[14,"log!","log","The standard logging macro.",null,null],[14,"error!","","Logs a message at the error level.",null,null],[14,"warn!","","Logs a message at the warn level.",null,null],[14,"info!","","Logs a message at the info level.",null,null],[14,"debug!","","Logs a message at the debug level.",null,null],[14,"trace!","","Logs a message at the trace level.",null,null],[14,"log_enabled!","","Determines if a message logged at the specified level in that module will\nbe logged.",null,null]],"paths":[[4,"LogLevel"],[4,"LogLevelFilter"],[8,"Log"],[3,"LogRecord"],[3,"LogMetadata"],[3,"LogLocation"],[3,"MaxLogLevelFilter"],[3,"SetLoggerError"],[3,"Box"],[3,"ExchangeHeapSingleton"],[3,"IntermediateBox"],[3,"Weak"],[3,"Arc"],[3,"Rc"],[3,"Weak"],[3,"RawVec"]]};
initSearch(searchIndex);
