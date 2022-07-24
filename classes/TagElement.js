class TagElement {
    constructor (name, ...attribute) {
        this.name = name;
        this.attribute = attribute;
    }

    addTag(tagIdentification = 'body') {
        const tagName = document.createElement(`${this.name}`);
        const myTag = document.querySelector(`${tagIdentification}`);

        myTag.append(tagName);
    }

    addTagText(text = '') {
        const myTag = document.querySelector(`${this.name}`);
        myTag.insertAdjacentText('afterbegin', `${text}`);
    }

    addTagAttribute() {
        const tagNameEl = document.querySelector(`${this.name}`);        
        const tagAttribute = this.attribute;

        tagAttribute.forEach(e => {
            const name = e.name;
            const value = e.value;

            if (e.name == 'class') {
                tagNameEl.classList.add(`${value}`);
            } else {
                tagNameEl.setAttribute(name, value);
            }
        });
    }
}