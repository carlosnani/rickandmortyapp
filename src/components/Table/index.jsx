import React from 'react'
import { Button } from '../Button';

export function Table({   }) {
  return (
    <>
      <tr key={index}>
        <td>{name}</td>
        <td>{type}</td>
        <td>{dimension}</td>
        <td>
          <Button>
            View
          </Button>
        </td>
      </tr>
    </>
  )
}
