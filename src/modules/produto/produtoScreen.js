
import React from 'react'
import ProdutoForm from './produtoForm';
import showResults from './showResults'
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';

const formName = 'produto';

class ProdutoScreen extends React.Component {

    render() {
        return <div>
            <ProdutoForm onSubmit={showResults} />
        </div>
    }
}

const form = reduxForm({
    form: formName,
});
export default connect()(form(ProdutoScreen));