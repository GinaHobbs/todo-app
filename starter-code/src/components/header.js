function Header(props) {

  return(
    <header>
      <h1>To Do List: {props.status} items pending</h1>
    </header>
  )
}

export default Header;
