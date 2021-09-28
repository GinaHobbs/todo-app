import { FormGroup, InputGroup } from "@blueprintjs/core"
import { Button } from "@blueprintjs/core";

function Form(props) {
  return(
    <form onSubmit={props.handleSubmit}>

        <h2>Add To Do Item</h2>

        <label>
          <span>To Do Item</span>
          <InputGroup onChange={props.handleChange} name="text" type="text" placeholder="Item Details"></InputGroup>
        </label>

        <label>
          <span>Assigned To</span>
          <InputGroup onChange={props.handleChange} name="assignee" type="text" placeholder="Assignee Name"></InputGroup>
        </label>

        <label>
          <span>Difficulty</span>
          <InputGroup onChange={props.handleChange} defaultValue={3} type="range" min={1} max={5} name="difficulty"></InputGroup>
        </label>

        <label>
          <Button type="submit">Add item</Button>
          {/* <button type="submit">Add Item</button> */}
        </label>
      </form>
  )
}

export default Form;