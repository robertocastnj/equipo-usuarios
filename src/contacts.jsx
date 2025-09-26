export default function Contacts({ index, name, email, phone, onDelete }) {
  return (
    <li className="contact">
      <div>
        <span className="name">{name}</span>
        <span className="details">{`${email}  ${phone}`}</span>
      </div>
      <button onClick={() => onDelete(index)}>del</button>
    </li>
  )
}
