import React from 'react';
import Button from './Button';

export default function ButtonPanel() {
  return (
    <>
      <div className="w-full border-white border-4 border-b-0 flex flex-wrap">
        <Button btnName="AC" addClass="bg-blue-300 hover:bg-blue-600" />
        <Button btnName="+/-" addClass="bg-blue-300 hover:bg-blue-600" />
        <Button btnName="%" addClass="bg-blue-300 hover:bg-blue-600" />
        <Button btnName="/" addClass="bg-blue-300 hover:bg-blue-600" />
      </div>
      <div className="w-full border-white border-4 border-b-0 flex flex-wrap">
        <Button btnName="7" addClass="text-3xl" />
        <Button btnName="8" addClass="text-3xl" />
        <Button btnName="9" addClass="text-3xl" />
        <Button btnName="X" addClass="bg-blue-300 hover:bg-blue-600" />
      </div>
      <div className="w-full border-white border-4 border-b-0 flex flex-wrap">
        <Button btnName="4" addClass="text-3xl" />
        <Button btnName="5" addClass="text-3xl" />
        <Button btnName="6" addClass="text-3xl" />
        <Button btnName="-" addClass="bg-blue-300 hover:bg-blue-600" />
      </div>
      <div className="w-full border-white border-4 border-b-0 flex flex-wrap">
        <Button btnName="1" addClass="text-3xl" />
        <Button btnName="2" addClass="text-3xl" />
        <Button btnName="3" addClass="text-3xl" />
        <Button btnName="+" addClass="bg-blue-300 hover:bg-blue-600" />
      </div>
      <div className="w-full border-white border-4 flex flex-wrap">
        <Button btnName="0" addClass="w-2/4 text-3xl" />
        <Button btnName="." addClass="text-3xl" />
        <Button
          btnName="="
          addClass="text-3xl bg-blue-400 hover:bg-blue-900"
        />
      </div>
    </>
  );
}
