import CommentCreateForm from '../../ui-components/CommentCreateForm';
import ContentCreateForm from '../../ui-components/ContentCreateForm';
import TimelineItemCreateForm from '../../ui-components/TimelineItemCreateForm';
import UserCreateForm from '../../ui-components/UserCreateForm';
import { Container, Text, VStack, Heading, Divider } from '@chakra-ui/react';

export default function CMS() {
    return (
        <Container maxW="100%" p={4}>
            <VStack spacing={8} align="stretch">
                <Heading size="xl">Uploading Data</Heading>
                <Divider />

                <VStack spacing={4}>
                    <Heading size="md">Create Content</Heading>
                    <ContentCreateForm />
                </VStack>

                <Divider />

                <VStack spacing={4}>
                    <Heading size="md">Create User</Heading>
                    <UserCreateForm />
                </VStack>

                <Divider />

                <VStack spacing={4}>
                    <Heading size="md">Create TimelineItem</Heading>
                    <TimelineItemCreateForm />
                </VStack>

                <Divider />

                <VStack spacing={4}>
                    <Heading size="md">Create Comment</Heading>
                    <CommentCreateForm />
                </VStack>
            </VStack>
        </Container>
    );
}
