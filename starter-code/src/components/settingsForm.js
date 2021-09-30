import React, { useContext } from 'react';
import {SiteContext} from '../context/site.js';
import { RadioGroup, Radio, FormGroup, InputGroup } from "@blueprintjs/core"
import { Button } from "@blueprintjs/core";

function settingsForm() {

  const siteContext = useContext(SiteContext);
  const state = {
    itemsPerPage: 0,
    showCompleted: null
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    siteContext.saveSiteSettings(state.itemsPerPage, state.showCompleted)
  }

  const handleChange = (e) => {
    e.preventDefault();
    state.itemsPerPage = e.target.value
  }

  const handleChangeRadio = (e) => {
    e.preventDefault()
    state.showCompleted = e.target.value
  }

  return(
    <form onSubmit={handleSubmit}>
      <label>
        <span>Change Items Per Page</span>
      </label>
      <InputGroup onChange={handleChange} name="itemsPerPage" type="text" placeholder="Items Per Page"></InputGroup>
      <RadioGroup
        label="Show Completed"
        onChange={handleChangeRadio}
        selectedValue={state.showCompleted}
      >
        <Radio label="True" value="true" />
        <Radio label="False" value="false" />
      </RadioGroup>
      <Button type="submit">Change Settings</Button>
    </form>
  )
  
}

export default settingsForm;