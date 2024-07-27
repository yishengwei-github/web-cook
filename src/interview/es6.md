# ES6

## 1.var、（新增）let和const

- var声明问题
    - 污染全局变量
    ``` js
        // let 不会
        var a = 1;
        console.log(window.a)
    ```
    - 变量提升
    ``` js
        // let 不会
        console.log(a) // function var
        var a = 1;
    ```
    - 可以被重复声明
    ``` js
        // let 可解决
        var a = 1;
        var a = 2;
        var a = 3;
    ```
    - let作用域问题（全局作用域 函数作用域）
    ``` js
        {
            // 改成let，就只能在当前域中生效
            var a = 1;
        }
        console.log(a);

        let a = 100;
        {
            console.log(a); // 暂存死区
            let a = 200;
        }
    ```