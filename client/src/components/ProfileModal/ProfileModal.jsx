import { Modal, useMantineTheme } from "@mantine/core";
import NavBar from "../NavBar/NavBar";
import "./ProfileModal.css"

function ProfileModal({ modalOpened, setModalOpened }) {
  const theme = useMantineTheme();

  return (
    <Modal
      overlayColor={
        theme.colorScheme === "dark"
          ? theme.colors.dark[9]
          : theme.colors.gray[2]
      }
      overlayOpacity={0.55}
      overlayBlur={3}
      size="50%"
      className="custom-modal"
      opened={modalOpened}
      onClose={() => setModalOpened(false)}
    >
      <form className="infoForm">
        <h3>Your info</h3>

        <input
          type="text"
          className="infoInput"
          name="FirstName"
          placeholder="First Name"
        />
        <input
          type="text"
          className="infoInput"
          name="LastName"
          placeholder="Last Name"
        />



        <input
          type="text"
          className="infoInput"
          name="worksAT"
          placeholder="Works at"
        />



        <input
          type="text"
          className="infoInput"
          name="livesIN"
          placeholder="LIves in"
        />

        <input
          type="text"
          className="infoInput"
          name="Country"
          placeholder="Country"
        />



        <input
          type="text"
          className="infoInput"
          placeholder="User Description "
        />




        <label htmlFor="profileImg">Profile Image</label>
        <input type="file" name='profileImg' className="info-Input" />
        <label htmlFor="coverImg">Cover Image</label>
        <input type="file" name="coverImg" className="info-Input" />

        <button className="button infoButton">Update</button>
      </form>
    </Modal>
  );
}

export default ProfileModal;