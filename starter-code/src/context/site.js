import { show } from '@blueprintjs/core/lib/esm/components/context-menu/contextMenu';
import React, { useEffect } from 'react';

// import this using {}, i.e. import {SiteContext} from 'this file';
export const SiteContext = React.createContext();

function Site(props) {

  const state = {
    itemsPerPage: 3,
    showCompleted: false,
    sort: 'difficulty',
    saveSiteSettings
  };

  function saveSiteSettings(itemsPerPage, showCompleted) {
    localStorage.setItem('itemsPerPage', itemsPerPage);
    localStorage.setItem('showCompleted', showCompleted);
  }

  useEffect(() => {
    saveSiteSettings(state.itemsPerPage, state.showCompleted);
    const itemsPerPage = JSON.parse(localStorage.getItem('itemsPerPage'));
    const showCompleted = JSON.parse(localStorage.getItem('showCompleted'));
    state.itemsPerPage = itemsPerPage;
    state.showCompleted = showCompleted;
  })

  return (
    <SiteContext.Provider value={state}>
      {props.children}
    </SiteContext.Provider>
  )

}

// import this without {}, i.e. import Site from 'this file';
export default Site;