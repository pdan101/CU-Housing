type Props = {
    readonly description: string
}

const About = ({description}: Props) => {
    return (
      <article className="About">
      <h1 className="headerTitle">About</h1>
      <p>{description}</p>
      </article>
    );
  }

export default About