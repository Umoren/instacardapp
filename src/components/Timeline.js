import { useState, useEffect } from 'react';
import { Container } from '@chakra-ui/react';
import mockData from '../data.json'; // Adjust the path to the location of your data.json file
import { Card } from "@/components/Card";
import { CommentList } from "@/components/CommentList";

export function Timeline() {
    const [timeline, setTimeline] = useState([]);

    useEffect(() => {
        setTimeline(mockData.TimelineItems);
    }, []);

    return (
        <Container>
            {timeline.map(post => (
                <Card key={post.id}>
                    <Card.Header author={mockData.Users.find(user => user.id === post.authorId)} />
                    <Card.Main content={mockData.Contents.find(content => content.id === post.contentId)} />
                    <Card.Footer
                        author={mockData.Users.find(user => user.id === post.authorId)}
                        description={post.description}
                        postTime={new Date(post.postTime).toLocaleTimeString()}
                    >
                        <CommentList postId={post.id} />
                    </Card.Footer>
                </Card>
            ))}
        </Container>
    );
}
