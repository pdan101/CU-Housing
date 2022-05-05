type Props = {
    readonly amenities: string[]
}

const Amenities = ({amenities}:Props) => {
    return (
      <article className='Amenities'>
      <h1 className="headerTitle">Amenities</h1>
        <ul>
          {amenities.map(x => {
              return (
                  <li>{x}</li>
              )
          })}
        </ul>
      </article>
    );
  }

export default Amenities