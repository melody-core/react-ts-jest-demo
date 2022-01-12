module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 13,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        // 为react组件声明props的类型: 关闭此检测
        "react/prop-types": "off",
        // 声明但没有用到的变量: 警告
        "no-unused-vars": "warn",
        // 含有jsx的文件必须要声明react: 关闭
        "react/react-in-jsx-scope": "off",
        // 为声明的react组件添加组件名字: 关闭
        "react/display-name": "off"
    }
};
