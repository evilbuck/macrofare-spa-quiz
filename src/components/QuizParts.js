import React, { Component } from 'react'

export function Activity(props) {
  return (
    <div>
      <h3>What Activity level?</h3>
      <button onClick={props.next}>Click Me</button>
    </div>
  )
}

export function Meat(props) {
  return (
    <div>
      <h3>What meat?</h3>
      <button onClick={props.next}>Click Me</button>
    </div>
  )
}

export function Finished(props) {
  return (
    <div>
      <h2>Tada! You're done!</h2>
    </div>
  )
}

export function Measurements(props) {
  return(
    <div>
      <h2>Measurements</h2>
      <div>
        <label>Height</label>
        <input type="text"/>
      </div>
      <div>
        <label>Weight</label>
        <input type="text"/>
      </div>
      <button onClick={props.next}>Click Me</button>
    </div>
  )
}