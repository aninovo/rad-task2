import React, { ReactElement } from 'react';

type TableRowProps = {
    children: React.ReactNode[];
}

export default function TableRow(props: TableRowProps)
    : React.ReactElement{
    let cells = props.children.map((child, id) => <td key={id.toString()}>{child}</td>);
    return (
        <tr>
            {cells}
        </tr>
    )
}