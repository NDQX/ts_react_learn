import React, { Component, createRef, forwardRef } from "react"
import PartA from './partA'
import PartB from './partB'
import PartC from './partC'
import { message } from 'antd'

interface stateType {
  btnList: number[]
}

const BtnCon = forwardRef((props: any, ref: any) => {
  return (
    <button ref={ref} onClick={ props.onClick } >
      { props.children } 
    </button>
  )
})

export default class RefUse extends Component<any, stateType> {
  constructor (props: any) {
    super(props)
    this.state = {
      btnList: [1, 2]
    }
    this.part1Ref = createRef()
    this.btnRef = createRef()
    this.forwardBtnRef = createRef()
  }

  btnRef: React.RefObject<HTMLButtonElement>
  forwardBtnRef: React.RefObject<HTMLButtonElement>
  part1Ref: any
  btnRefsList: HTMLButtonElement[] = []
  

  btnClick = () => {
    message.success('通过ref.current 调用子组件方法')
    this.part1Ref.current.partCb()
  }

  forwardBtnClick = () => {
    console.log('1')
  }

  getRef = (ele: HTMLButtonElement) => {
    this.btnRefsList.push(ele)
  }

  singleBtnClick = (i: any) => {
    console.log(i, 'iii')
    console.log(this.btnRefsList, 'btnRefsList')
  }

  render () {
    return (
      <div>
        <h2>createRef </h2>
        <h5>函数式组件上不能使用ref 因为没有实例 用forwardRef</h5>
        <button ref={this.btnRef} onClick={ this.btnClick } >原生按钮1</button>
        <div>
          { this.state.btnList.map((item, index) => {
            return <button ref={this.getRef} key={index} onClick={ () => this.singleBtnClick(index) }>{ item }</button>
          }) }
        </div>
        <div>
          <h4>forwards--ref -- 传递ref</h4>
          <BtnCon ref={ this.forwardBtnRef } onClick={this.forwardBtnClick} >forwardBtn</BtnCon>
        </div>
        <PartA
          ref={ this.part1Ref }
        ></PartA>
        <PartB></PartB>
        <PartC></PartC>
      </div>
    )
  }
}