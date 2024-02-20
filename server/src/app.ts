import Koa from 'koa';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';
import axios from 'axios';
import cors from '@koa/cors';

const app = new Koa();
const router = new Router();

app.use(cors());
app.use(bodyParser({enableTypes: ['json', 'text']}));
app.use(router.routes());
app.use(router.allowedMethods());

async function getAllPosts(query: any, variables = {}) {
	try {
		const {data} = await axios.post('https://gql.hashnode.com/', {
			query,
			variables
		});
		return data.data.publication.posts.edges;
	} catch (error) {
		console.log('🚀 ~ asyncfunctiongql(query:any,variables ~ error:', error);
	}
}

const GET_USER_ARTICLES = `
    query Publication {
      publication(host: "aldas.hashnode.dev") {
        isTeam
        title
        posts(first: 10) {
          edges {
            node {
              title
              brief
              url
              slug
            }
          }
        }
      }
    }
`;

const GET_SINGLE_POST = `
query GetSinglePost($slug: String!) {
  publication(host: "aldas.hashnode.dev") {
    isTeam
    title
    post(slug: $slug) {
      title
      content {
        markdown
        html
      }
    }
  }
}
`;

async function getSinglePost(query: string, slug: string) {
	try {
		const response = await axios.post('https://gql.hashnode.com/', {
			query,
			variables: {slug}
		});
		return response.data;
	} catch (error) {
		console.error('Error fetching single post:', error);
		throw error;
	}
}

// Usage example

getAllPosts(GET_USER_ARTICLES, {page: 0});

router.get('/api/blogs', async ctx => {
	ctx.body = await getAllPosts(GET_USER_ARTICLES, {page: 0});
});

router.get('/api/blog/:slug', async ctx => {
	const {slug} = ctx.params;
	const post = await getSinglePost(GET_SINGLE_POST, slug);
	const singlePost = post.data.publication.post;
	ctx.body = singlePost;
});

app.listen(2525, () => {
	console.log('Now listening from port 2525, go to http://localhost:2525');
});

export default app;
