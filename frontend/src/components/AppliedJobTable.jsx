import React from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { Badge } from './ui/badge';


const appliedJobs=[1,2,3,4,5];
function AppliedJobTable() {
  return (
    <div>
        <Table>
            <TableCaption>A list of Your Applied Jobs</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Job Role</TableHead>
                    <TableHead>Company</TableHead>
                    <TableHead className="text-right">Status</TableHead>
                </TableRow>

            </TableHeader>
            <TableBody>
                {
                    appliedJobs.map((item,index)=>(
                        <TableRow key={index}>
                            <TableCell> 08-19-2024</TableCell>
                            <TableCell> Frontend Developer</TableCell>
                            <TableCell> Microsoft</TableCell>
                            <TableCell className="text-right"><Badge>Peding</Badge> </TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    </div>
  )
}

export default AppliedJobTable