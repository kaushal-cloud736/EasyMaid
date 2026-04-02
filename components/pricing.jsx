import React from 'react'
import { Card, CardContent } from './ui/card'
import { PricingTable } from '@clerk/nextjs'

const Pricing = () => {
    return (
        <Card className="border-0 shadow-none bg-transparent">
            <CardContent className="p-0">
                <PricingTable
                    checkoutProps={{
                        appearance: {
                            elements: {
                                drawerRoot: {
                                    zIndex: 2000,
                                },
                            },
                        },
                    }}
                />
            </CardContent>
        </Card>
    )
}

export default Pricing;