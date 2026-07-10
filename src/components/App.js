import Banner from './Banner'
import Cart from './Cart'
import ShoppingList from './ShoppingList'
import QuestionForm from './QuestionForm'
import Footer from './Footer'

function App() {
    return (
        <div>
            <Banner />
            <Cart />

            <form onSubmit={handleSubmit}>
                <input type='text' name='my_input' defaultValue='Tapez votre texte' />
                
                <button type='submit'>Entrer</button>
            </form>

            <ShoppingList />

            <Footer />
        </div>
    )
}

function handleSubmit(e) {
    e.preventDefault()
    alert(e.target['my_input'].value)
}

export default App;
