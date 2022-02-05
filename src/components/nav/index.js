import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectedDisplay } from '../../store/actions/ui';
import { unit } from '../../constants';

const Navbar = () => {
  const dispatch = useDispatch();
  const { display } = useSelector((state) => state.ui);

  return (
    <div
      style={{
        height: 3 * unit,
        width: '100%',
        borderBottom: '1px solid grey',
        zIndex: 1000,
        position: 'fixed',
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
      }}
    >
      <div
        onClick={() => {
          dispatch(selectedDisplay('Home'));
        }}
        style={display === 'Home' ? styles.selectedTab : styles.tab}
      >
        <p>Home</p>
      </div>

      <div
        onClick={() => {
          dispatch(selectedDisplay('Chords'));
        }}
        style={display === 'Chords' ? styles.selectedTab : styles.tab}
      >
        <p>Chords</p>
      </div>
      <div
        onClick={() => {
          dispatch(selectedDisplay('Mando'));
        }}
        style={display === 'Mando' ? styles.selectedTab : styles.tab}
      >
        <p>Mando</p>
      </div>
      <div
        onClick={() => {
          dispatch(selectedDisplay('Banjo'));
        }}
        style={display === 'Banjo' ? styles.selectedTab : styles.tab}
      >
        <p>Banjo</p>
      </div>
      <div
        onClick={() => {
          dispatch(selectedDisplay('Guitar'));
        }}
        style={display === 'Guitar' ? styles.selectedTab : styles.tab}
      >
        <p>Guitar</p>
      </div>
    </div>
  );
};

export default Navbar;

const styles = {
  tab: {
    height: 3 * unit,
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
    width: '25%',
  },
  selectedTab: {
    height: 3 * unit,
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
    width: '25%',
    borderBottom: '4px solid blue',
  },
};
