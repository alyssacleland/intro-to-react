"use client";

import PropTypes from 'prop-types';

// you may only have one dynamic file per directory

export default function DynamicRoute({ params }) {

  return <div>ID = {params.dynamicKey}</div>;
}
// that's wild. to see output, in browser go to 'http://localhost:3000/my-folder/XYZ'
// teh value is an object bc we're dot notating on it

DynamicRoute.propTypes = {
  params: PropTypes.string.isRequired,
}
