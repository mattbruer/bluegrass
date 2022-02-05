import { useEffect, useState } from 'react';
import './App.css';
import { Auth } from 'aws-amplify';
// import { withAuthenticator } from '@aws-amplify/ui-react';
import { Authenticator } from '@aws-amplify/ui-react';
import Song from './components/chart/Song';
import { newContext } from './store/actions/audio';
import { useDispatch, useSelector } from 'react-redux';
import '@aws-amplify/ui-react/styles.css';

import Navbar from './components/nav';
import Controls from './components/controls';
import Display from './components/display';

function App({ user, signOut }) {
  const dispatch = useDispatch();
  const { display } = useSelector((state) => state.ui);

  useEffect(() => {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    dispatch(newContext(new AudioContext()));
  }, [dispatch]);

  return (
    <div>
      <Navbar />
      <Display />
      <Controls />
    </div>

    // <Authenticator>
    //   {({ signOut, user }) => (
    //     <main>
    //       <Song />
    //     </main>
    //   )}
    // </Authenticator>
  );
}

export default App;

const styles = {
  tab: {
    height: '60px',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
    width: '25%',
  },
  selectedTab: {
    height: '60px',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
    width: '25%',
    borderBottom: '4px solid blue',
  },
};

<div
  style={{
    position: 'fixed',
    bottom: '0px',
    height: '250px',
    width: '100%',
    backgroundColor: 'lightblue',
    zIndex: 1000,
  }}
>
  <div style={{ height: '60px', border: '1px solid black' }}></div>
  <div style={{ height: '60px', border: '1px solid black' }}></div>
  <div
    style={{
      height: '60px',
      fontSize: '50px',
      border: '1px solid black',
      display: 'flex',
      justifyContent: 'center',
    }}
  >
    <div
      style={{
        border: '1px solid black',
        height: '60px',
        width: '60px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      E
    </div>
    <div
      style={{
        border: '1px solid black',
        height: '60px',
        width: '60px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      A
    </div>
    <div
      style={{
        border: '1px solid black',
        height: '60px',
        width: '60px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      D
    </div>
    <div
      style={{
        border: '1px solid black',
        height: '60px',
        width: '60px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      G
    </div>
    <div
      style={{
        border: '1px solid black',
        height: '60px',
        width: '60px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      B
    </div>
    <div
      style={{
        border: '1px solid black',
        height: '60px',
        width: '60px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      e
    </div>
  </div>
  <div style={{ height: '60px', border: '1px solid black', display: 'flex' }}>
    <div style={{ height: '60px', width: '33%', border: '1px solid black' }}>
      Prev
    </div>
    <div style={{ height: '60px', width: '33%', border: '1px solid black' }}>
      Next
    </div>
    <div style={{ height: '60px', width: '33%', border: '1px solid black' }}>
      Done
    </div>
  </div>
</div>;

{
  /* <div
        style={{
          position: 'fixed',
          top: '60px',
          height: 'calc(100% - 240px)',
          width: '100%',
          // backgroundColor: 'pink',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div>title</div>
        <div style={{ width: '100vw', overflow: 'scroll' }}>
          <div
            style={{
              height: '250px',
              width: '7000px',
              // border: '1px solid black',
              zIndex: 1005,
              backgroundColor: 'white',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              position: 'relative',
              marginLeft: '25%',
            }}
          >
            <svg height="100%">
              <line stroke="black" x1="10px" x2="30px" y1="60px" y2="60px" />
            </svg>

            <div
              style={{
                height: '132px',
                width: '100%',
                border: '1px solid black',
                position: 'absolute',
                backgroundColor: 'white',
                mixBlendMode: 'darken',
                fontSize: '18px',
              }}
            >
              <div
                style={{
                  height: '20px',
                  width: '20px',
                  border: '1px solid black',
                }}
              >
                22
              </div>
              <div style={{ height: '20px', border: '1px solid black' }}>
                22
              </div>
              <div style={{ height: '20px', border: '1px solid black' }}>
                22
              </div>
              <div style={{ height: '20px', border: '1px solid black' }}>
                22
              </div>
              <div style={{ height: '20px', border: '1px solid black' }}>
                22
              </div>
              <div style={{ height: '20px', border: '1px solid black' }}>
                22
              </div>
            </div>
          </div>
        </div>
      </div> */
}
