# Calc Grid
+ Fixed px gutter
+ Semantic
+ Easy
+ Uses css calc function
+ Supported from ie9
+ Very lightweight and understandable

## How to use it

### Use a container element to center your content
```
.container {
    @include outerContainer()
}
```

### Make a container to hold your columns
```
.item-container {
    @include colContainer;
}
```


### Choose how many columns to span
```
.item {
    @include cols(1/4);
}
```

By default the gutter width is 20px, but this can be changed by supplying a second argument to the cols mixin call