function paragraph()
{
  const paragraph = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quam massa, suscipit in posuere vitae, sollicitudin et eros. Sed accumsan quam at eros vestibulum lacinia. Curabitur magna nulla, vestibulum sit amet quam quis, tincidunt pellentesque lacus. Etiam lacus tortor, congue in suscipit malesuada, gravida eget mauris. Cras dignissim faucibus eros, ut bibendum augue dapibus at. In hac habitasse platea dictumst. Cras ultricies orci ut arcu sollicitudin fringilla. Duis porta libero egestas turpis molestie, ut mollis ligula scelerisque. Sed nunc justo, efficitur sed posuere sit amet, volutpat sed dolor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus ac est auctor, congue mauris quis, efficitur lacus.';
  const text = document.createTextNode(paragraph);
  document.body.appendChild(text);
}

window.onload = () =>
{
  setTimeout(paragraph, 5000);
};
