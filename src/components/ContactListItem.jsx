import PropTypes from 'prop-types';

const ContactListItem = ({ id, name, number, onDeleteContact }) => {
  return (
    <>
      <li className="item_contact">
        {name}:{number}
        <button onClick={() => onDeleteContact(id)}>Delete</button>
      </li>
    </>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
};
export default ContactListItem;
