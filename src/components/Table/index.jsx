import React from 'react'
import { Button } from '../Button';

export function Table({ index, name, air_date, episode }) {
  return (
    <>
      <tr key={index}>
        <td>{name}</td>
        <td>{air_date}</td>
        <td>{episode}</td>
        <th>
          <Button>Detail</Button>
        </th>
      </tr>
    </>
  )
}
