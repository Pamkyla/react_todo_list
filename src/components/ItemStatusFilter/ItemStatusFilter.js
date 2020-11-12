import React from 'react';

import './ItemStatusFilter.css';

class ItemStatusFilter extends React.Component {

    typeButtons = ['all', 'public', 'private', 'sources', 'forks', 'archived', 'mirrors'];
    languageButtons = ['all', 'HTML', 'CSS', 'JS'];

    render() {

        const { onItemsFilterChange, filter } = this.props;
        const typeButtons = this.typeButtons.map((el) => {
            const btnClass = filter === el ? 'btn-success' : 'btn-outline-secondary';
            return (
                <option
                    key={el}
                    className={`btn ${btnClass}`}

                >
                    {el}
                </option>
            );
        });

        const languageButtons = this.languageButtons.map((el) => {
            const btnClass = filter === el ? 'btn-success' : 'btn-outline-secondary';
            return (
                <option
                    key={el}
                    className={`btn ${btnClass}`}
                >
                    {el}
                </option>
            );
        });

        function typeFilter() {
            let typeBox = document.getElementById("type");
            let typeValue = typeBox.options[typeBox.selectedIndex].value;
            onItemsFilterChange(typeValue);
        }
        function languageFilter() {
            let languageBox = document.getElementById("language");
            let languageValue = languageBox.options[languageBox.selectedIndex].value;
            onItemsFilterChange(languageValue);
        }

        return (
            <div className="ItemStatusFilter">
            <select
            id='type'
            className="btn"
            onChange={() => typeFilter()}
        >
            {typeButtons}

            </select>

            <select
                id='language'
                className="btn"
                onChange={() => languageFilter()}
            >
                {languageButtons}
            </select>
            <a href="https://github.com/new" className="text-center btn btn-primary ml-3"> New</a>
            </div>
        );
    };
}


export default ItemStatusFilter;