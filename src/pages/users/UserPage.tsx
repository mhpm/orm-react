import { UserList } from '@/components';
import { useEffect } from 'react';
// import { useModalContext } from '@/components/modal/ModalContext';

function UserPage() {
  // const { openModal } = useModalContext();

  // const handleClick = () => {
  //   openModal(
  //     'Title',
  //     <div className='text-center'>
  //       <p>This is dynamic content for the modal.</p>
  //     </div>
  //   );
  // };

  useEffect(() => {
    binaryGap(17);
  }, [])
  

  const binaryGap = (N:number) => {
    const binary = N.toString(2);
    console.log('binary: ', binary);
    const chars = binary.split('')
    
    if(!binary.includes('0')){
      console.log(0)
    }
    
    const gaps = [];
    let counter = 0;
    let index = 0;
    

    while (index < chars.length) {

      while(chars[index] === "1"){
        index++;
      }

      while(chars[index] === "0"){
        counter += 1;
        index++;
      }
      gaps.push(counter)
      counter = 0
    }
    
    console.log(gaps);
    return Math.max(...gaps)
    
  }

  return (
    <div className="block justify-center w-full p-10">
      <UserList />
    </div>
  );
}

export default UserPage;
