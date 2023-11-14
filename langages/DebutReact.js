
const root = document.querySelector('#root');
// let h1 = React.createElement('h1', null, 'Coucou les Amis');
// let p = React.createElement('p', {children: 'Ceci est un paragraphe'});
// let h1 = React.createElement('h1', {children : p});

function MonComposant({ data }) { // methode 1
  return (
    <section>
      <h1>{data} </h1>
    </section>
  )
}

/* // Methode 2
  const MonComposant = (props) => {
    return (
      <section>
        <h1>{props.data} </h1>
      =</section>
    )
  }
*/

const Template = () => {
  const title = ' Bonjour Les amis !';
  return (
    <main>
      <MonComposant data={title} />
    </main>
  )
}

ReactDOM.render(<Template />, root)

