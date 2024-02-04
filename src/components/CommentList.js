import { useEffect, useState } from 'react'
import { listComments } from '@/graphql/queries'
import { Box, Text } from '@chakra-ui/react';
import { generateClient } from 'aws-amplify/data'

const client = generateClient()

export function CommentList({ postId }) {
    const [comments, setComments] = useState([])
    useEffect(() => {
        async function getComments() {
            try {
                const commentsData = await client.graphql({
                    query: listComments,
                    variables: { filter: { timelineItemCommentId: { eq: postId } } },
                });
                if (commentsData.data.listComments) {
                    setComments(commentsData.data.listComments?.items);
                }
            } catch (error) {
                console.error('Error fetching comments:', error);
            }
        }

        if (postId) {
            getComments();
        }
    }, [postId]);
    return (
        <Box>
            {comments.map(comment => (
                <Text key={comment.id}>
                    <Text key={comment.id}>
                        <Text as='b'>{comment.author?.username} </Text>
                        {comment?.body}
                    </Text>
                </Text>
            ))}
        </Box>
    )
}