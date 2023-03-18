import React, { useEffect, useState } from "react";
import "./SuggestionCard.css";
import FollowersModal from "../FollowersModal/FollowersModal";
import { getAllUser } from "../../api/UserRequests";
import User from "../Users/User";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const SuggestionCard = ({ location }) => {
  const [modalOpened, setModalOpened] = useState(false);
  const [persons, setPersons] = useState([]);
  const { user } = useSelector((state) => state.authReducer.authData);

//   useEffect(() => {
//     const fetchPersons = async () => {
//       const { data } = await getAllUser();
//       const filteredData = data.filter((person) =>
//         person.skills.some((skill) => user.skills.includes(skill))
//       );
//       setPersons(filteredData);
//     };
//   }, []);

useEffect(() => {
    const fetchPersons = async () => {
      const { data } = await getAllUser();
      setPersons(data);
    };
    fetchPersons();
  }, []);

  return (
    <div className="FollowersCard">
      <h3>Suggestions</h3>

      {persons.slice(0, 10).map((person, id) => {
        if (person._id !== user._id && person.skills == user.skills) return <User person={person} key={id} />;
      })}

      {!location ? (
        <span onClick={() => setModalOpened(true)}>Show more</span>
      ) : (
        ""
      )}
    </div>
  );
};

export default SuggestionCard;
