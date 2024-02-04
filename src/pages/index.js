import { Timeline } from "@/components/Timeline"
import { Card } from "@/components/Card"
import { CommentList } from "@/components/CommentList"


export default function Home() {
  return (
    <>
      <Timeline>
        {({ post }) => (
          <Card post={post} key={post.id}>
            <Card.Header author={post.author} />
            <Card.Main content={post.content} />
            <Card.Footer
              author={post.author}
              description={post.description}
            >
              <CommentList postId={post.id} />
            </Card.Footer>
          </Card>
        )}
      </Timeline>
    </>
  )
}
