import { useActionState } from "react";

async function updateName(formData) {
  const name = formData.get("name");

  // Simulate an API call with a delay
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return {
    success: true,
    message: `이름이 "${name}"(으)로 업데이트되었습니다!`,
  };

  // return {
  //   error: "이름 업데이트에 실패했습니다. 다시 시도해주세요.",
  // };
}

export default function MyForm() {
  const [state, submitAction, isPending] = useActionState(
    async (previousState, formData) => {
      return await updateName(formData);
    },
    { error: null, success: false, message: "" },
  );

  return (
    <form action={submitAction}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          disabled={isPending}
          placeholder="새로운 이름을 입력하세요."
        />
      </div>

      <button type="submit" disabled={isPending}>
        {isPending ? "업데이트 중..." : "이름 업데이트"}
      </button>

      {state.error && <p style={{ color: "red" }}>오류: {state.error}</p>}
      {state.success && <p style={{ color: "green" }}>성공: {state.message}</p>}
    </form>
  );
}
