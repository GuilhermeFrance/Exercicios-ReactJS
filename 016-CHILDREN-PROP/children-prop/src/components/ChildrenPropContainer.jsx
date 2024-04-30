
const ChildrenPropContainer = ({ children, myValue }) => {
  return (
    <div>
        <h2>Este é o título do container</h2>
        {children}
        <p>este é o meu valor: {myValue}</p>
    </div>
  )
}

export default ChildrenPropContainer