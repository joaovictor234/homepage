interface IInfo {
  title: string,
  content: string
}

const Info = ({title, content}: IInfo) => {
  return (
    <>
      <h3>{title}</h3>
      <p>{content}</p>
    </>
  )
}

export default Info;