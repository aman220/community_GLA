import { useDisclosure } from '@mantine/hooks';
import { Center, Modal, useMantineTheme } from '@mantine/core';

function ProfileModal({modalOpened, setModalOpened}) {
  const [opened, { open, close }] = useDisclosure(false);
  const theme = useMantineTheme();

  return (
      <Modal 
        opened={modalOpened}
        onClose={()=>setModalOpened(false)}
        overlayProps={{
          color: theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2],
        //   opacity: 0.55,
        //   blur: 3,
        }}
      >
      <form className='infoForm'>
      <h3>Your info</h3>
      </form>
      </Modal>
  );
}

export default ProfileModal