import React, {
  useState,
  useEffect,
  useRef,
  useLayoutEffect,
  useReducer,
  useCallback,
  useMemo,
} from "react";

class Child extends React.Component{
    render(){
        console.log(this);
        return  (
            <div
              onClick={() => {
                this.props.handleClick({
                  count: 1,
                });
              }}
            >
              child
            </div>
          )
    }
}

class Parent extends React.Component {
    handleChildClick = (...args) => {
        this.setState(...args)
    }
  render() {
    return (
      <div>
        <Child handleClick={this.handleChildClick} updater={{}}/>
      </div>
    );
  }
}

const HookCoponent = (props) => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  const memoUI = useMemo(() => {
    return count + 1;
  }, [count]);

  return (
    <>
      <div onClick={() => handleClick(count)}>
        {memoUI} : {count}
      </div>
    </>
  );
};

export default Parent;
