import { generateClient } from 'aws-amplify/data'
import { useState, useEffect } from 'react';
import { listTimelineItems } from '../graphql/queries';
import { Container } from '@chakra-ui/react';


const client = generateClient()


export function Timeline({ children }) {
    const [timeline, setTimeline] = useState([])

    useEffect(() => {
        const fetchTimeline = async () => {
            try {
                const timelineData = await client.graphql({ query: listTimelineItems });
                setTimeline(timelineData.data?.listTimelineItems?.items);

                console.log('timeline', timelineData.data.listTimelineItems)
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchTimeline();
    },
        []);

    return (
        <Container>
            {timeline.map(post => children({ post }))}
        </Container>
    )

}