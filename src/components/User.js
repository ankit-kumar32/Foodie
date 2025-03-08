const User = (props) => {
  return (
    <div className="user-card">
      <h2>Name:{props.name}</h2>
      <h3>location:Varanasi</h3>
      <h4>Contact:ppa@gmail.com</h4>
    </div>
  );
};

export default User;
