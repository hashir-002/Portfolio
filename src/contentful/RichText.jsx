import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const RichText = ({ richTextContent }) => {
  // Check the structure of the richTextContent by logging it
  console.log('Rich Text Content:', richTextContent);

  // Define custom styles for different elements in rich text
  const options = {
    renderNode: {
      // For 'embedded-entry-block'
      'embedded-entry-block': (node) => {
        return <div>Embedded Entry: {node.data.target.sys.id}</div>;
      },
      'embedded-asset-block': (node) => {
        return (
          <div>
            <img
              src={node.data.target.fields.file.url}
              alt={node.data.target.fields.title}
              className="max-w-full mb-6"
            />
          </div>
        );
      },
      'hyperlink': (node) => {
        return (
          <a
            href={node.data.uri}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800"
          >
            {node.content[0].value}
          </a>
        );
      },
      // Custom rendering for headings
      'heading-1': (node) => (
        <h1 className="text-4xl font-bold mb-6 text-gray-900">{node.content[0].value}</h1>
      ),
      'heading-2': (node) => (
        <h2 className="text-3xl font-semibold mb-5 text-gray-800">{node.content[0].value}</h2>
      ),
      'heading-3': (node) => (
        <h3 className="text-2xl font-semibold mb-4 text-gray-700">{node.content[0].value}</h3>
      ),
      // Custom rendering for paragraphs
      'paragraph': (node) => (
        <p className=" text-gray-700 mb-4">{node.content[0].value}</p>
      ),
      // Custom rendering for unordered lists
      'unordered-list': (node) => {
        console.log('Unordered List Node:', node); // Debugging the unordered list node
        return (
          <ul className="list-disc list-inside pl-5 space-y-3 mb-2">
            {node.content.map((listItem, index) => (
              <li key={index} className=" text-gray-700">
                {/* Render the content of each list item */}
                {listItem.content[0] && listItem.content[0].content[0].value}
              </li>
            ))}
          </ul>
        );
      },
      // Custom rendering for ordered lists
      'ordered-list': (node) => {
        console.log('Ordered List Node:', node); // Debugging the ordered list node
        return (
          <ol className="list-decimal list-inside pl-5">
            {node.content.map((listItem, index) => (
              <li key={index} className="text-lg text-gray-700">
                {/* Render the content of each list item */}
                {listItem.content[0] && listItem.content[0].value}
              </li>
            ))}
          </ol>
        );
      },
      // For blockquotes
      'block-quote': (node) => (
        <blockquote className="bg-gray-100 border-l-4 pl-4 italic text-gray-600 mb-6">
          {node.content[0].value}
        </blockquote>
      ),
    },
  };

  if (!richTextContent) {
    return <div>No content available</div>;
  }

  return (
    <div>
      {/* Render content using the document-to-react-conversion */}
      {documentToReactComponents(richTextContent, options)}
    </div>
  );
};

export default RichText;