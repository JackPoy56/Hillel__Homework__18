const idDiv = new AttributeTag('id', 'mainBlock');
const className = new AttributeTag('class', 'main');

const newTagElementDiv = new TagElement('div', idDiv, className);
const newTagElementP = new TagElement('p', className, new AttributeTag('class', 'text')); /// new AttributeTag('class', 'text') задан в аргумент как пример, что можно его использовать без объявления переменной

newTagElementDiv.addTag();
newTagElementDiv.addTagAttribute();
newTagElementDiv.addTagText('Привіт я div');

newTagElementP.addTag('#mainBlock');
newTagElementP.addTagAttribute();
newTagElementP.addTagText('А я P');