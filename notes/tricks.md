### 1.如何让块级元素并排展示
- 添加.clearfix
  ```
  .clearfix::after{
    content: '';
    display: block;
    clear: both;
    }
  ```
- 添加属性：display: inline-block
  

### 2.不要写具体的宽度和高度，容易引发bug（100px、100%)

### 3.<span>换行，2个标签中间会有一个空格

### 4.要想某个元素不占文档流高度，可以设置position:fixed属性