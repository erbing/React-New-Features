# React-New-Features
Experiments on new features on the react

## 用于React 新特性的 demo 以及一些 bug的解决方法的


## React  各个版本之间的纵向对比

| React 版本 \  各个阶段 API   |Mounting（绑定）|Updating（数据更新）|Unmounting （解除绑定）|Error Handling （错误处理）|
| :--------                  | --------:| :------: |
|  V 16.0.0    |   constructor()<br> componentWillMount()<br> render() <br>componentDidMount() |  componentWillReceiveProps()<br> shouldComponentUpdate() <br>componentWillUpdate()<br> render()<br> componentDidUpdate()  | componentWillUnmount() | componentDidCatch() |
|  V 16.3.2    |   constructor()<br> static&nbspgetDerivedStateFromProps()<br>componentWillMount() / UNSAFE_componentWillMount()<br>render()<br>componentDidMount() |  componentWillReceiveProps() / UNSAFE_componentWillReceiveProps()<br>static getDerivedStateFromProps()<br>shouldComponentUpdate()<br>componentWillUpdate() /UNSAFE_componentWillUpdate()<br>render()<br>getSnapshotBeforeUpdate()<br>componentDidUpdate()  |   componentWillUnmount() |  componentDidCatch() |
|  V 16.5.2    |   constructor()<br>static getDerivedStateFromProps()<br>render()<br>componentDidMount() |  static getDerivedStateFromProps()<br>shouldComponentUpdate()<br>render()<br>getSnapshotBeforeUpdate()<br>componentDidUpdate()  |   componentWillUnmount() |  componentDidCatch()  |
|  V 16.7.0(最新) |   constructor()<br>static getDerivedStateFromProps()<br>render()<br>componentDidMount() |  static getDerivedStateFromProps()<br>shouldComponentUpdate()<br>render()<br>getSnapshotBeforeUpdate()<br>componentDidUpdate()  |   componentWillUnmount() |  static getDerivedStateFromError()<br>componentDidCatch()  |
