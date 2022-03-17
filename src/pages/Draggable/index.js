import React, { Component } from 'react'
// import external
import { DraggableCore } from 'react-draggable';
import { CKEditor } from 'ckeditor4-react';
export default class Draggable extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
      xCache: 0,
      yCache: 0,
      showOn: true,
    };
  };

  // handleStart handler
  handleStart = (e, drags) => {
  };

  // handleDrag handler
  handleDrag = (e, drags) => {
    console.log(drags.lastX);
    const xCache = this.state.xCache + drags.deltaX;
    const yCache = this.state.yCache + drags.deltaY;

    if (this.element) {
      this.setState({
        xCache: xCache || 0,
        yCache: yCache || 0
      });
    }
  };

  // handleStop handler
  handleStop(e, drags) {
    console.log(drags);
  };

  // toggle handler
  toggle() {
    this.setState((prevState, props) => {
      return { showOn: !prevState.showOn };
    });
  }

  render() {
    const transfrom = `translateX(${this.state.xCache}px) translateY(${this.state.yCache}px)`;
    return (
      <div style={{ margin: '100px' }}>
        <DraggableCore
          onStart={this.handleStart}
          onDrag={this.handleDrag}
          onStop={this.handleStop}>
          <div
            ref={(element) => this.element = element}
            style={{
              position: 'absolute',
              display: 'inline-block',
              transform: transfrom,
              // border: '1px solid',
              padding: '10px',
              // background: '#FFFFFF',
              color: 'black !important',
              // borderRadius: '100px'
            }}
          >
            <span onClick={() => this.toggle()}>
              <img src="./cross.png" alt="cross" width="20" height="" style={{ display: this.state.showOn ? 'inherit' : 'none' }} />
              <img src="./minimize.png" alt="cross" width="20" height="" style={{ display: this.state.showOn ? 'none' : 'inherit' }} />
            </span>
            <br></br>
            <div style={{ display: this.state.showOn ? 'inherit' : 'none' }}>
              <CKEditor />
            </div>
            <div style={{ display: this.state.showOn ? 'none' : 'inherit' }}>
            </div>
          </div>
        </DraggableCore>
      </div>
    );
  }
}
