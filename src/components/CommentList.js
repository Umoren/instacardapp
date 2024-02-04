import { useEffect, useState } from 'react';
import { Box, Text } from '@chakra-ui/react';
import mockData from '../data.json';

export function CommentList({ postId }) {
    const [comments, setComments] = useState([]);

    useEffect(() => {

        const filteredComments = mockData.Comments.filter(comment => comment.timelineItemId === postId);
        setComments(filteredComments);
    }, [postId]); // Dependency array includes postId to refetch when it changes

    return (
        <Box>
            {comments.map(comment => (
                <Text key={comment.id}>
                    <Text as='b'>{comment.author?.username} </Text>
                    {comment.body}
                </Text>
            ))}
        </Box>
    );
}