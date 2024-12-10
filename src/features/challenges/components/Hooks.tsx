import UseContextExample from './hooks/UseContextExample';
import UseDeferredValueExample from './hooks/UseDeferredValueExample';
import UseEffectExample from './hooks/UseEffectExample';
import UseIdExample from './hooks/UseIdExample';
import UseImperativeHandleExample from './hooks/UseImperativeHandleExample';

const Box = ({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="my-4 p-4 border rounded-lg bg-woodsmoke-900">
      <h3 className="font-bold mb-2">{title}</h3>
      <p className="mb-4 text-woodsmoke-300 italic">{description}</p>
      {children}
    </div>
  );
};

function Hooks() {
  return (
    <div className="w-full lg:w-1/2">
      <h1 className="mb-10">Hooks</h1>
      <Box
        title="UseContext"
        description="lets you access shared data (like themes or user info) without passing it down manually"
      >
        <UseContextExample />
      </Box>
      <Box
        title="UseDeferredValueExample"
        description="delays rendering slow components while keeping the app responsive"
      >
        <UseDeferredValueExample />
      </Box>
      <Box
        title="UseEffectExample"
        description="helps you run code when something happens, like fetching data or cleaning up resources"
      >
        <UseEffectExample />
      </Box>
      <Box
        title="UseIdExample"
        description="helps you create unique IDs for things like form inputs and labels"
      >
        <UseIdExample />
      </Box>
      <Box
        title="ImperativeHandle"
        description="allows you to expose specific methods from a child component to a parent component"
      >
        <UseImperativeHandleExample />
      </Box>
    </div>
  );
}

export default Hooks;
